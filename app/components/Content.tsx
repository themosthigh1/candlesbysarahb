'use client'
import { Container } from "@mui/material"
import ProductCards from "../(pages)/products/ProductCards"
import { Product } from "@/types"

type Props = {
    products: Product[]
  }

const Content = ({products}: Props) => {
  return (
    <Container>
        <ProductCards products={products}/>
    </Container>
  )
}

export default Content