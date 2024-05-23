import React from 'react';
import { Button } from '@pingtou/ui';
import { ArrowUpFromLine } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

export const UploadIcon: React.FC = () => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      console.log(acceptedFiles);
    },
    accept: {
      'image/*': [],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="border border-dashed rounded-md cursor-pointer bg-gray-50 h-full"
    >
      <input {...getInputProps()} />

      <div className="py-4 flex flex-col items-center justify-center h-full">
        <Button variant="outline" size="sm" className="gap-1">
          <ArrowUpFromLine size={14} />
          上传头像
        </Button>

        <p className="text-sm mt-3 font-normal text-muted-foreground">在此上传或拖入头像</p>
      </div>
    </div>
  );
};
