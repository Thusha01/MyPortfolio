export function useDownloadCV() {
  const download = () => {
    const link = document.createElement('a')
    link.href = '/Thusharaga_Sanujan_CV.pdf'
    link.download = 'Thusharaga_Sanujan_CV.pdf'
    link.click()
  }
  return download
}