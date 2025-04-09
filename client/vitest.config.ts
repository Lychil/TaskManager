/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './src/tests/setup.ts',
        include: ['**/*.{test,spec}.{ts,tsx}'],
        exclude: ['node_modules', 'dist'],
    },
});