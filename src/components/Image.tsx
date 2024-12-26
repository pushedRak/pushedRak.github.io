import { Loader2 } from 'lucide-react';
import NEXTImage from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

const LoadingSpinner = styled(Loader2)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #666;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

interface ImageProps {
  thumbnail: string;
  alt: string;
}

export default function Image({thumbnail, alt}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
    {isLoading && <LoadingSpinner size={24} />}
    <NEXTImage
              src={thumbnail || ''}
              alt={alt || ''}
              fill
              style={{
                objectFit: 'contain',
                opacity: isLoading ? 0 : 1,
                transition: 'opacity 0.3s ease'
              }}
              onLoad={() => setIsLoading(false)}
            />
    </>
  )
}