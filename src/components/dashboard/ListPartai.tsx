import { FC } from "react";
import Navbar from "../navbar/Navbar";
import monkeyPaslon from "../../assets/image 1.png";
import { useNavigate } from "react-router-dom";

interface ListPartaiProps {}

const ListPartai: FC<ListPartaiProps> = ({}) => {
    const navigate = useNavigate()

    const handleClickAddPartai = () => {
        navigate("/add-partai")
    }
  return (
    <>
      <Navbar />
      <div className="flex flex-col px-[2vw] py-14">
        <h1 className="text-5xl font-black text-[#5E5400] text-center">
          LIST PARTAI
        </h1>

        <div className="flex items-start justify-end mt-4">
          <button
            onClick={handleClickAddPartai}
            className="bg-[#5E5400] text-white px-4 py-2 rounded-md"
          >
            Add Partai
          </button>
        </div>

        <div className="mt-10 text-black">
          <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
            <thead className="border-b font-medium dark:border-neutral-500">
              <tr>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  No. Urut
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Logo
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Ketua Umum
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Visi & Misi
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Alamat
                </th>
              </tr>
            </thead>
            <tbody className="text-left bg-white">
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap border-r text-center px-6 py-4 font-medium dark:border-neutral-500">
                  1
                </td>
                <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                  <img
                    src={monkeyPaslon}
                    alt=""
                    className="w-[78px] h-[94px] rounded-lg"
                  />
                </td>
                <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                  Cintara Surya Paloh
                </td>
                <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                  <ul className="list-disc">
                    <li>Memindahkan Indonesia ke Isekai.</li>
                    <li>Nonton anime 3x sehari.</li>
                    <li>Melakukan peresapan pada budaya jepang.</li>
                  </ul>
                </td>
                <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                  Kerajaan Black Clover
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListPartai;
