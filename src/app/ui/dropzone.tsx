'use client';

import React, { useCallback } from 'react';
import { FileWithPath, useDropzone } from "react-dropzone";
import { kreon } from '@/app/ui/fonts';

interface MyDropzoneProps {
    onDrop: (acceptedFiles: FileWithPath[]) => void;
}

const MyDropzone: React.FC<MyDropzoneProps> = ({ onDrop }) => {
    const handleDrop = useCallback(
        (acceptedFiles: FileWithPath[]) => {
            onDrop(acceptedFiles);
        },
        [onDrop]
    );

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: handleDrop,
        accept: {
            'application/json': [".run"],
        }
    });

    return (
        <div {...getRootProps()} className="mb-2 flex h-20 items-center justify-start rounded-md bg-[#593d3d] p-4 md:h-40">
            <input {...getInputProps()} />
            <p className={`${kreon.className} text-lg`}>Drag and drop your /run folder here, or click to select files. Only .run files are accepted</p>
        </div>
    )
}

export default MyDropzone;