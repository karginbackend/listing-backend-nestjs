import { Injectable } from '@nestjs/common';
import { ensureDir } from 'fs-extra';
import { FileUpload } from 'graphql-upload/processRequest.mjs';
import { createWriteStream } from 'node:fs';
import { join } from 'node:path';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FileService {
	private readonly uploadDir = join(process.cwd(), 'uploads');

	public constructor() {
		this.initializeUploadDir();
	}

	private async initializeUploadDir(): Promise<void> {
		await ensureDir(this.uploadDir);
	}

	private async saveFile(
		stream: NodeJS.ReadableStream,
		filepath: string
	): Promise<void> {
		return new Promise((resolve, reject) => {
			const writeStream = createWriteStream(
				join(this.uploadDir, filepath)
			);

			stream
				.pipe(writeStream)
				.on('finish', resolve)
				.on('error', (error) => {
					writeStream.destroy();
					reject(error);
				});
		});
	}

	public async uploadFiles(files: FileUpload[]) {
		if (!files?.length) {
			throw new Error('No files provided');
		}

		const uploadPromises = files.map(async (file) => {
			const { createReadStream, filename } = file;
			const uniqueFilename = `${uuidv4()}-${filename}`;
			const filepath = join(this.uploadDir, uniqueFilename);

			await this.saveFile(createReadStream(), filepath);
			return `/uploads/${uniqueFilename}`;
		});

		return Promise.all(uploadPromises);
	}

	public async updateFiles() {}

	public async deleteFiles() {}
}
