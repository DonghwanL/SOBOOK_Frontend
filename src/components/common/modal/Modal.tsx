import React, { useRef, useEffect } from 'react'
import tw from 'twin.macro'
import useOnClickOutside from '@hooks/useOutSideClick'
import useKeyEscClose from '@hooks/useKeyEscClose'

interface ModalProps {
  children: React.ReactNode
  onToggleModal?: () => void
}

const Modal = ({ children, onToggleModal }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const onClickClose = () => {
    onToggleModal?.()
  }

  // 바깥 영역 클릭시 모달 창 닫기
  useOnClickOutside(modalRef, onClickClose)

  // ESC 눌렀을 경우 모달 창 닫기
  useKeyEscClose(onClickClose)

  // 모달 외부 스크롤 방지
  useEffect(() => {
    document.body.style.cssText = `
    position: fixed;
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`
    return () => {
      const scrollY = document.body.style.top
      document.body.style.cssText = ''
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
    }
  }, [])

  return (
    <BackDrop>
      <ContentWrapper ref={modalRef}>
        <Content>
          {children}
          <ContentFooter>
            <CloseButton onClick={onClickClose}>확인</CloseButton>
          </ContentFooter>
        </Content>
      </ContentWrapper>
    </BackDrop>
  )
}

const BackDrop = tw.div`
  bg-black bg-opacity-40 fixed inset-0 flex items-center justify-center
`

const ContentWrapper = tw.div`
  bg-white w-96 p-5 rounded-lg text-center
`

const Content = tw.div`
  mt-3 text-black
`

const ContentFooter = tw.div`
  flex justify-center mt-5 p-2 mt-10
`

const CloseButton = tw.button`
  font-bold text-indigo-600
`

export default Modal
