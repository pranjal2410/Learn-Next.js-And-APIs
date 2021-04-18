import { Paper, Typography, makeStyles, Grid, IconButton} from "@material-ui/core";
import Image from "next/image";
import {ArrowForward, ArrowBack} from "@material-ui/icons";
import {images} from "./images.json";
import {useState} from "react";

const AnimatedImages = () => {
    const [imageIndex, setImageIndex] = useState(0);
    return (
        <Grid item xs={12}>
            <IconButton disabled={imageIndex===0} onClick={() => setImageIndex(imageIndex-1)}>
                <ArrowBack style={{ fontSize: 60}}/>
            </IconButton>
            <Image
                src={images[imageIndex]}
                alt="Sample Image"
                width={500}
                height={500}
            />
            <IconButton disabled={imageIndex===images.length-1} onClick={() => setImageIndex(imageIndex+1)}>
                <ArrowForward style={{ fontSize: 60}}/>
            </IconButton>
        </Grid>
    )
}

export default AnimatedImages;