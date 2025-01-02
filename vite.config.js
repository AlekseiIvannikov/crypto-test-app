import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import checker from 'vite-plugin-checker';
import { fileURLToPath, URL } from 'url';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(new URL(import.meta.url)));

export default defineConfig({
    plugins: [
        vue(),
        checker({
            typescript: true,
            vueTsc: true,
            overlay: false,
        }),
        /* Uncomment to analyze bundle */
        // visualizer({
        //   filename: './build/stats.html',
        //   open: true,
        //   template: 'treemap',
        //   gzipSize: true,
        //   brotliSize: true,
        // }),
    ],
    server: {
        port: 3000,
    },
    preview: {
        port: 5000,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.ts', '.vue'],
    },
    build: {
        outDir: 'build',
        target: 'es2020',
        sourcemap: process.env.NODE_ENV !== 'production',
        minify: 'esbuild',
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['vue', 'vue-router'],
                    echarts: ['echarts/core', 'echarts/charts', 'echarts/components', 'echarts/renderers'],
                },
            },
        },
        chunkSizeWarningLimit: 800,
    },
    optimizeDeps: {
        esbuildOptions: {
            target: 'es2020',
        },
    },
    esbuild: {
        loader: 'ts',
        include: [/\.ts?$/],
        exclude: [],
    },
    base: './',
});
