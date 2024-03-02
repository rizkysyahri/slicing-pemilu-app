import { FC } from "react";
import monkeyPaslon from "../../assets/image 1.png";
import { ListVoterData } from "../../types/types";

interface AdminPageProps {
  listVoter: ListVoterData[];
}

const AdminPage: FC<AdminPageProps> = ({ listVoter }) => {
  return (
    <>
      <section className="flex flex-col px-[2vw] py-14">
        <div className="">
          <h1 className="text-5xl font-black text-[#5E5400] text-center">
            DASHBOARD
          </h1>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="flex flex-col items-center">
              <span className="bg-[#FFCD56] rounded-full px-6 py-3 border-8 border-[#5E5400] text-4xl font-bold text-[#5E5400]">
                1
              </span>
              <div className="bg-[#FFCD56] mt-8 px-4 py-6 rounded-2xl">
                <div>
                  <img
                    src={monkeyPaslon}
                    alt=""
                    className="w-[330.3px] h-[262px] object-cover rounded-lg"
                  />
                  <div className="text-[#5E5400] my-3 flex-col flex">
                    <h1 className="font-black text-4xl custom">SURYA SURYA</h1>
                    <span className="text-xl font-bold custom2">Akumulasi : 45%</span>
                    <span className="text-xl font-bold custom2">
                      Jumlah Vote : 117 Voters
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="bg-[#56FFF5] rounded-full px-5 py-3 border-8 border-[#00585E] text-4xl font-bold text-[#00585E]">
                2
              </span>
              <div className="bg-[#56FFF5] mt-8 px-4 py-6 rounded-2xl">
                <div>
                  <img
                    src={monkeyPaslon}
                    alt=""
                    className="w-[330.3px] h-[262px] object-cover rounded-lg"
                  />
                  <div className="text-[#00585E] my-3 flex-col flex">
                    <h1 className="font-black text-4xl custom">SURYA SURYA</h1>
                    <span className="text-xl font-bold custom2">Akumulasi : 75%</span>
                    <span className="text-xl font-bold custom2">
                      Jumlah Vote : 300 Voters
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="bg-[#FF5656] rounded-full px-5 py-3 border-8 border-[#5E0000] text-4xl font-bold text-[#5E0000]">
                3
              </span>
              <div className="bg-[#FF5656] mt-8 px-4 py-6 rounded-2xl">
                <div>
                  <img
                    src={monkeyPaslon}
                    alt=""
                    className="w-[330.3px] h-[262px] object-cover rounded-lg"
                  />
                  <div className="text-[#5E0000] my-3 flex-col flex">
                    <h1 className="font-black text-4xl custom">SURYA SURYA</h1>
                    <span className="text-xl font-bold custom2">Akumulasi : 45%</span>
                    <span className="text-xl font-bold custom2">
                      Jumlah Vote : 117 Voters
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#D9D9D9]">
        <div className="flex flex-col items-center justify-center px-[2vw] py-36">
          <h1 className="text-5xl font-black text-[#5E5400]">LIST VOTER</h1>
          <div className="mt-10 text-black">
            <table className="min-w-full border text-left text-sm font-light dark:border-neutral-500">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th
                    scope="col"
                    className="border-r pr-12 px-6 py-4 dark:border-neutral-500"
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    Nama
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 pr-28 py-4 dark:border-neutral-500"
                  >
                    Alamat
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 pr-28 py-4 dark:border-neutral-500"
                  >
                    Jenis Kelamin
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 pr-28 py-4 dark:border-neutral-500"
                  >
                    Paslon
                  </th>
                </tr>
              </thead>
              {listVoter.map((member, index) => {
                return (
                  <>
                    <tbody key={index} className=" text-left bg-white">
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                          {member.no}
                        </td>
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                          {member.name}
                        </td>
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                          {member.address}
                        </td>
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                          {member.gender}
                        </td>
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500 text-[#061E99]">
                          {member.paslon}
                        </td>
                      </tr>
                    </tbody>
                  </>
                );
              })}
            </table>

            <p className="mt-10 font-bold text-2xl">
              TOTAL SUARA TERKUMPUL : 1000 Voters
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminPage;
