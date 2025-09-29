import { useState } from "react";

// Componente de imagen con fallback
const ImageWithFallback = ({
  src,
  fallback = "https://",
  alt = "Imagen",
  className = "",
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    if (!isError) {
      setImgSrc(fallback);
      setIsError(true);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={className}
      {...props}
    />
  );
};

export { ImageWithFallback };
