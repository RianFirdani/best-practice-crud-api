import { getProduct } from "@/libs/useProducts";
import { Table ,Container } from "@chakra-ui/react";
import Form from "./components/form";

export default async function Home() {
  
   const products =  await getProduct()

  return (
    <Container>
     <Table.Root size="sm">
      <Table.Caption>Product inventory and pricing information</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>No.</Table.ColumnHeader>
          <Table.ColumnHeader>Name</Table.ColumnHeader>
          <Table.ColumnHeader >Price</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Image</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {products.map((product,index)=>{
          return(
            <Table.Row key={product.id}>
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell>{product.name}</Table.Cell>
              <Table.Cell>{product.price}</Table.Cell>
              <Table.Cell>{product.image}</Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Root>
    <Form />
    </Container>
  );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
