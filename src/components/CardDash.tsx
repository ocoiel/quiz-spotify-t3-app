import Image from "next/image";
import { useState } from "react";
import { BiCopy, BiEdit, BiSlider, BiTrash } from "react-icons/bi";
import { Dropdown, DropdownItem } from "./Dropdown";

interface ICardDash {
  image: string;
  modal?: boolean;
  title: string;
  description: string;
  link?: string;
}

export default function CardDash({
  image,
  modal,
  title,
  description,
  link,
}: ICardDash) {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const handleEditModal = () => {
    setEditModal(!editModal);
  };

  const handleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };

  return (
    // changing tag <a> -> <div> because of hydrations issues

    // <div
    //   className="delay-50 group min-h-max w-[26rem] rounded-2xl bg-zinc-900 p-4 duration-150 hover:-translate-y-2 hover:bg-zinc-700 hover:shadow-md "
    //   // href={`${link}`}
    //   // onClick={() => alert("amor")}
    // >
    //   <Image
    //     src={`/${image}.svg`}
    //     className="w-full rounded-xl shadow"
    //     width={228}
    //     height={228}
    //     alt={`${title}-${description}`}
    //   />
    //   <h3 className="mt-5 text-2xl font-bold text-gray-200">{title}</h3>
    //   <p className="mt-2 text-sm font-light text-gray-400"> {description}</p>

    // </div>
    modal ? (
      <Dropdown
        title={title}
        description={description}
        className="bg-transparent text-gray-900 hover:text-gray-700"
        icon={<BiSlider size={18} />}
        href={""}
      >
        <DropdownItem icon={<BiCopy size={17} />} href={""}>
          Copy
        </DropdownItem>
        <DropdownItem
          icon={<BiEdit size={18} />}
          // onClick={handleEditModal}
          onClick={() => alert("amor")}
          href={""}
        >
          botao tremendamente grande q louco
        </DropdownItem>
        <DropdownItem
          icon={<BiTrash size={18} />}
          onClick={handleDeleteModal}
          href={""}
        >
          Delete
        </DropdownItem>
      </Dropdown>
    ) : (
      <div
        className="delay-50 group min-h-max w-[26rem] rounded-2xl bg-zinc-900 p-4 duration-150 hover:-translate-y-2 hover:bg-zinc-700 hover:shadow-md "
        // href={`${link}`}
        // onClick={() => alert("amor")}
      >
        <Image
          src={`/${image}.svg`}
          className="w-full rounded-xl shadow"
          width={228}
          height={228}
          alt={`${title}-${description}`}
        />
        <h3 className="mt-5 text-2xl font-bold text-gray-200">{title}</h3>
        <p className="mt-2 text-sm font-light text-gray-400"> {description}</p>
      </div>
    )
  );
}

// {modal ? (
//   <div>
//     <Dropdown
//       title="Options"
//       className="bg-transparent text-gray-900 hover:text-gray-700"
//       icon={<BiSlider size={17} />}
//       href={""}
//     >
//       <DropdownItem icon={<BiCopy size={17} />} href={""}>
//         Copy
//       </DropdownItem>
//       <DropdownItem
//         icon={<BiEdit size={17} />}
//         onClick={handleEditModal}
//         href={""}
//       >
//         Edit
//       </DropdownItem>
//       <DropdownItem
//         icon={<BiTrash size={17} />}
//         onClick={handleDeleteModal}
//         href={""}
//       >
//         Delete
//       </DropdownItem>
//     </Dropdown>
//     <Modal
//       title={`Edit: /s/${props.slug}`}
//       open={editModal}
//       close={handleEditModal}
//     >
//       <Edit
//         id={props.id}
//         slug={props.slug}
//         url={props.url}
//         description={props.description}
//       />
//     </Modal>
//     <Modal
//       title={`Delete: /s/${props.slug}`}
//       open={deleteModal}
//       close={handleDeleteModal}
//     >
//       <Delete id={props.id} />
//     </Modal>
//   </div>
// ) : null}
