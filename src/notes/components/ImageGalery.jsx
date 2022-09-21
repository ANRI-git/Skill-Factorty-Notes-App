import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export const ImageGalery = ({ images = [] }) => {
  console.log(images);
  return (
    <ImageList
      sx={{
        width: '100%',
        height: 500,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
      cols={4}
      rowHeight={250}
    >
      {images.map(({ url, path }) => (
        <ImageListItem key={url} sx={{ maxWidth: 300 }}>
          <img src={url} srcSet={url} alt={path} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
