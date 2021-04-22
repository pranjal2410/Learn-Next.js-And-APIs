import { Paper, Typography, makeStyles, Grid, Slider} from "@material-ui/core";
import Image from "next/image";
import {images} from "./images.json";
import {useState} from "react";

const AnimatedImages = () => {
    const [imageIndex, setImageIndex] = useState(0);
    return (
        <Grid container direction="column" alignItems="center" style={{ padding: '3%'}}>
            <Grid item xs={12}>
                <Image
                    src={images[imageIndex]}
                    alt="Sample Image"
                    width={300}
                    height={300}
                />
                <Slider
                    value={imageIndex}
                    onChange={(e, newValue) => setImageIndex(newValue)}
                    min={0}
                    max={7}
                    color="primary"
                />
            </Grid>
        </Grid>
    )
}

export default AnimatedImages;