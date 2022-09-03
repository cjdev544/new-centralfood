import { useState } from 'react'

const useFormModal = () => {
  const [openModal, setOpenModal] = useState(false)

  return {
    openModal,
    setOpenModal,
  }
}

export default useFormModal
