import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'

const DEFAULT_LABELS: Record<string, string> = {
  fr: 'Imprimer le CV',
  en: 'Print resume',
}

export function PrintButton() {
  const { language, resolve } = useTranslation()

  // resolve label: explicit config > labels.actions > default
  let label: string
  if (resumeConfig.labels.actions.printResume) {
    label = resolve(resumeConfig.labels.actions.printResume)
  } else {
    label = DEFAULT_LABELS[language] ?? DEFAULT_LABELS.en
  }

  const handleClick = () => {
    // dispatch an event asking other components to prepare immediately
    window.dispatchEvent(new Event('resume:prepare-print'))
    // also fire beforeprint in case anything is listening
    window.dispatchEvent(new Event('resume:beforeprint'))
    // wait for React to render the changes AND for the browser to paint
    // use requestAnimationFrame to ensure the DOM is updated, then wait additional time
    requestAnimationFrame(() => {
      setTimeout(() => window.print(), 200)
    })
  }

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-resume-primary/10 text-resume-primary hover:bg-resume-primary/20 transition-colors text-sm font-medium"
    >
      {label}
    </button>
  )
}
