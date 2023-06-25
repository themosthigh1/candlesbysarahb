'use client'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';
import { Product } from '@/types';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

type Props = {
    products: Product[]
  }

export default function ProductCards({products}: Props) {

  return (
    <Box mt={5} sx={{ flexGrow: 1 }}>
      <Container>
        <Box mb={5}>
          <Typography variant='h3'>THE REDOLENCE COLLECTION</Typography>
        </Box>
        <Grid container direction={'row'} spacing={2}>
          {products?.map((product) => (
            <Grid item xs={12} md={3} key={product.name}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia>
                    
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {product.details}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Buy Now</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
