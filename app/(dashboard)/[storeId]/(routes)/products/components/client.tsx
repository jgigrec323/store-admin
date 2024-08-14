"use client";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Billboard } from "@prisma/client";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ProductColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface ProductClientProps {
  data: ProductColumn[];
}

const ProductClient: React.FC<ProductClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Products (${data.length})`}
          description="Manage products for your store"
        ></Heading>
        <Button
          onClick={() => {
            router.push(`/${params.storeId}/products/new`);
          }}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator></Separator>
      <DataTable columns={columns} searchKey="label" data={data}></DataTable>
      <Heading title="API" description="API calls for products" />
      <Separator />
      <ApiList entityName="products" entityIdName="productId" />
    </>
  );
};

export default ProductClient;
