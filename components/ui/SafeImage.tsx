'use client';

import Image, { type ImageProps } from 'next/image';
import { useEffect, useMemo, useState } from 'react';

type Props = Omit<ImageProps, 'src'> & {
    src: string;
    fallbackSrc?: string;
};

export default function SafeImage({ src, fallbackSrc = '/IMG_8735.JPG', onError, ...props }: Props) {
    const initialSrc = useMemo(() => src, [src]);
    const [currentSrc, setCurrentSrc] = useState<string>(initialSrc);

    useEffect(() => {
        setCurrentSrc(initialSrc);
    }, [initialSrc]);

    return (
        <Image
            {...props}
            src={currentSrc}
            onError={(e) => {
                if (currentSrc !== fallbackSrc) {
                    setCurrentSrc(fallbackSrc);
                }
                onError?.(e);
            }}
        />
    );
}
