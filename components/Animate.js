import { Paper, Typography, makeStyles, Grid, Slider} from "@material-ui/core";
import Image from "next/image";
import {images} from "./images.json";
import {motion} from "framer-motion";
import {useState} from "react";

const AnimatedImages = () => {
    const [imageIndex, setImageIndex] = useState(0);
    let prevValue;

    return (
        <Grid container direction="column" alignItems="center" style={{ padding: '3%'}}>
            <Grid item xs={12}>
                {images.map((image, i) => {
                    return i === imageIndex?(
                        <motion.div
                            animate={{ rotate: 360, x: '0vw' }}
                            initial={{ x: '-100vw'}}
                            transition={{ duration: 1.5 }}
                            key={i}
                        >
                            <Image
                                src={image}
                                alt="Sample Image"
                                width={300}
                                height={300}
                            />
                        </motion.div>
                    ):null;
                })}
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