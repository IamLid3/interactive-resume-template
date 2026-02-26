import { useState, useEffect } from 'react'
import { flushSync } from 'react-dom'
import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'
import { ExperienceItem } from './ExperienceItem'
import { ProjectItem } from './ProjectItem'
import { EducationItem } from './EducationItem'

export function MainContent() {
  const { resolve, resolveArray } = useTranslation()
  const { personal, experiences, projects, education, labels } = resumeConfig
  // `expandedExp` can be a number to indicate which item is open, `null` when none
  // or the special string 'all' which means every experience should be expanded (used when printing)
  const [expandedExp, setExpandedExp] = useState<number | null | 'all'>(0)

  const toggleExp = (id: number) => {
    // ignore toggles while printing: we don't want the user to collapse when 'all' is active
    if (expandedExp === 'all') return
    setExpandedExp(expandedExp === id ? null : id)
  }

  // automatically expand all entries when printing and restore afterwards
  useEffect(() => {
    const handleBefore = () => {
      // ensure React updates before the print snapshot is taken
      flushSync(() => setExpandedExp('all'))
    }
    const handleAfter = () => setExpandedExp(null)
    window.addEventListener('beforeprint', handleBefore)
    window.addEventListener('afterprint', handleAfter)
    // our own event triggered by the print button, may fire earlier than browser event
    window.addEventListener('resume:beforeprint', handleBefore)
    window.addEventListener('resume:prepare-print', handleBefore)
    return () => {
      window.removeEventListener('beforeprint', handleBefore)
      window.removeEventListener('afterprint', handleAfter)
      window.removeEventListener('resume:beforeprint', handleBefore)
      window.removeEventListener('resume:prepare-print', handleBefore)
    }
  }, [])

  const experienceLabels = {
    mainTasks: resolve(labels.experience.mainTasks),
    moreTasks: resolve(labels.experience.moreTasks),
    training: labels.experience.training ? resolve(labels.experience.training) : undefined,
    techEnv: resolve(labels.experience.techEnv),
    technologies: resolve(labels.experience.technologies),
  }

  return (
    <div className="md:w-[62%] p-8">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-[0.15em] text-resume-text">
          {personal.name.toUpperCase()}
        </h1>
        <p className="text-base text-resume-text-secondary tracking-widest mt-2">
          {resolve(personal.title).toUpperCase()}
        </p>
      </div>
      <div className="text-justify mb-8 px-4 py-2 border-resume-primary bg-resume-primary/10 rounded">
        {personal.subtitle && (
          <p className="text-sm text-resume-primary mt-1">{resolve(personal.subtitle)}</p>
        )}
      </div>

      {/* Experiences */}
      <div className="relative">
        <h2 className="text-sm font-bold tracking-widest text-resume-text mb-6 pb-2 border-b border-resume-primary/20">
          {resolve(labels.sections.experience)}
        </h2>
        <div className="space-y-2">
            {experiences.map((exp) => (
              <ExperienceItem
                key={exp.id}
                year={resolve(exp.period)}
                company={resolve(exp.company)}
                type={exp.type ? resolve(exp.type) : undefined}
                role={resolve(exp.role)}
                description={resolve(exp.description)}
                techs={exp.techs}
                expanded={expandedExp === 'all' || expandedExp === exp.id}
                onToggle={() => toggleExp(exp.id)}
                details={
                  exp.details
                    ? {
                        context: resolve(exp.details.context),
                        tasks: exp.details.tasks ? resolveArray(exp.details.tasks) : undefined,
                        training: exp.details.training ? resolveArray(exp.details.training) : undefined,
                        env: resolve(exp.details.env),
                      }
                    : undefined
                }
                subItem={
                  exp.subItem
                    ? {
                        title: resolve(exp.subItem.title),
                        description: resolve(exp.subItem.description),
                      }
                    : undefined
                }
                labels={experienceLabels}
                isHighlighted={exp.isHighlighted}
              />
            ))}
        </div>
      </div>

      {/* Projects */}
      {projects && projects.length > 0 && labels.sections.projects && (
        <div className="mt-8">
          <h2 className="text-sm font-bold tracking-widest text-resume-text mb-4 pb-2 border-b border-resume-primary/20">
            {resolve(labels.sections.projects)}
          </h2>
          <div className="space-y-1">
            {projects.map((project) => (
              <ProjectItem
                key={project.id}
                title={resolve(project.title)}
                description={resolve(project.description)}
                techs={project.techs}
                url={project.url}
                github={project.github}
              />
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      <div className="mt-8">
        <h2 className="text-sm font-bold tracking-widest text-resume-text mb-4 pb-2 border-b border-resume-primary/20">
          {resolve(labels.sections.education)}
        </h2>
        <div className="space-y-4">
          {education.map((edu, i) => (
            <EducationItem
              key={`${resolve(edu.school)}-${resolve(edu.degree)}-${edu.period ?? i}`}
              school={resolve(edu.school)}
              degree={resolve(edu.degree)}
              specialty={edu.specialty ? resolve(edu.specialty) : undefined}
              period={edu.period}
              logo={edu.logo}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
