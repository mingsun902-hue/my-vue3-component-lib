const typeProps = ['loading', 'success', 'warning', 'info', 'error'] as const

export interface MessageOptions {
  message: string,
  type?: (typeof typeProps)[number], 
  duration?: number,
  promise?: Promise<MessageOptions>,
  onClose?: () => void;
}
