import { AxiosInstance } from "@/app/services/axios"
import Image from "next/image"
interface props {
  api: String
  children?: React.ReactNode
}

export const Search = ({ api, children }: props) => {

  const handleSearch = async () => {
    try {
      const response = await AxiosInstance.get(`${api}`)
      return response
    } catch (error) {
      console.log(error);
      return { data: [] }
    }
  }

  return (
    <form className="flex flex-1">
      <input type="text" placeholder="O que deseja?" className="px-2" />
      <button type="submit">
        <Image src={"/search.svg"} alt="search" width={20} height={20} />
      </button>
    </form>
  )
}