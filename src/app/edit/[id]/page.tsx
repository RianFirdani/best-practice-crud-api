import FormEdit from "@/app/components/FormEdit"
import { getOneProduct } from "@/libs/getOneProducts"


const Page = async ({ params }: { params: { id: string } }) => {
  const {id} = await params
  const product = await getOneProduct(id)

  return (
    <>
      <h1>{id}</h1>
      <div>
        <FormEdit id={id} product={product} />
      </div>
    </>
  )
}

export default Page