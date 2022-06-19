import * as React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  IconButton
} from "@mui/material";
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';


interface ImageCardProps {
  onDelete: (src: string) => void,
  name: string,
  src: string,
  onClick: (src: string) => void
}

function ImageCard(props: ImageCardProps) {

  return (
    <Card
      sx={{
        maxWidth: 100,
        maxHeight: 100,
        border: 2,
        position: "relative",
      }}
      onClick={() => props.onClick(props.src)}
    >
      <IconButton
        style={{
          position: "absolute",
          top: "-10%",
          left: "85%",
          transform: "translateX(-50%)",
          zIndex: 2000
        }}
        onClick={() => props.onDelete(props.name)}
      >
        <DoNotDisturbOnIcon color="error" />
      </IconButton>
      <CardActionArea
        sx={{ zIndex: 1000 }}
      >
        <CardMedia component="img" image={props.src} />
      </CardActionArea>
    </Card>
  );
}


interface ImageCardListProps {
  images: Array<File>,
  onDelete: (src: string) => void,
  onClick: (src: string) => void
}

export function ImageCardList({ images, onDelete, onClick }: ImageCardListProps) {



  return (
    <Grid container wrap="wrap" justifyContent="flex-start" rowGap=".5rem">
      {images.map((image, index) => (
        <Grid item key={index} sx={{ marginRight: ".5rem" }}>
          <ImageCard
            name={image.name}
            src={URL.createObjectURL(image)}
            onDelete={onDelete}
            onClick={onClick}
          />
        </Grid>
      )
      )}
    </Grid>
  );
}
