# Use Node.js 22 (compatible with @types/node 22.10.7 from package.json)
FROM node:22.14.0-alpine AS builder

# Working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy source files
COPY . .

# Generate Prisma Client
RUN yarn run prisma:generate

# Build the application
RUN yarn run build

# Final image
FROM node:22.14.0-alpine

WORKDIR /app

# Copy dependencies and build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.env ./

# Install production dependencies only
RUN yarn install --production

# Expose port (specified in .env)
EXPOSE ${PORT:-4000}

# Run migrations and start the application
CMD ["sh", "-c", "yarn prisma:deploy && yarn run start:prod"]


