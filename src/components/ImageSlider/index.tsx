import React from 'react';
import {
  Container,
  Header,
  ImagesIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from './styles';
import { CarPhotoInterface } from '../../interfaces/car-server.interface';

type ImageSliderProps = {
  images: CarPhotoInterface[];
  children: React.ReactNode;
};

const ImageSlider = ({ images, children }: ImageSliderProps) => {
  return (
    <Container>
      <Header>
        {children}
        <ImagesIndexes>
          <ImageIndex active={true} />
          <ImageIndex active={false} />
          <ImageIndex active={false} />
        </ImagesIndexes>
      </Header>

      <CarImageWrapper>
        <CarImage
          source={{ uri: images[0] }}
          resizeMode='contain'
        />
      </CarImageWrapper>
    </Container>
  );
};

export default ImageSlider;
