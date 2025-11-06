'use client'
import React from 'react'
import { Table, Container } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from '@/libs/axios';

// ✅ 1. Definisikan tipe data produk
type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

const Page = () => {
  // ✅ 2. Gunakan queryKey (penting buat caching)
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: async (): Promise<Product[]> => {
      const res = await axiosInstance.get<Product[]>('/');
      return res.data; // ✅ ambil data dari response
    },
  });

  // ✅ 3. Handle loading dan error
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Terjadi kesalahan saat mengambil data</p>;
  if (!data || data.length === 0) return <p>Tidak ada produk</p>;

  // ✅ 4. Render table
  return (
    <Container>
      <Table.Root size="sm">
        <Table.Caption>Product inventory and pricing information</Table.Caption>

        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>No.</Table.ColumnHeader>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Price</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">Image</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map((product, index) => (
            <Table.Row key={product.id}>
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell>{product.name}</Table.Cell>
              <Table.Cell>{product.price}</Table.Cell>
              <Table.Cell>{product.image}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Container>
  );
};

export default Page;
