import useModal from '../hooks/useModal';

export default function App() {
  const { Modal, open, close } = useModal();

  return (
    <div>
      <button onClick={open}>open modal</button>
      <Modal>
        <p>삭제하시겠습니까?</p>
        <div>
          <button onClick={close}>OK</button>
          <button onClick={close}>Cancle</button>
        </div>
      </Modal>
    </div>
  )
}
