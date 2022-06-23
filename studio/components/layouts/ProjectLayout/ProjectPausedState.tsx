import { FC, useState } from 'react'
import { Button, IconAlertCircle, IconPauseCircle } from '@supabase/ui'

import { Project } from 'types'
import Link from '@supabase/ui/dist/cjs/components/Typography/Link'
import router from 'next/router'

interface Props {
  project: Project
}

const ProjectPausedState: FC<Props> = ({ project }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { ref } = router.query

  return (
    <>
      <div className="mx-auto mt-8 mb-16 w-full max-w-7xl space-y-8">
        <div className="mx-6 space-y-8">
          <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-6"></div>
          <div className="bg-scale-300 border-scale-400 flex h-[500px] items-center justify-center rounded border p-8">
            <div className="w-[420px] space-y-4">
              <div className="mx-auto flex max-w-[300px] items-center justify-center space-x-4 lg:space-x-8">
                <IconPauseCircle className="text-scale-1100" size={50} strokeWidth={1.5} />
              </div>

              <div className="space-y-1">
                <p className="text-center">This project is paused.</p>
              </div>

              <div className="mt-4 flex items-center justify-center gap-4">
                <Button
                  // onClick={}
                  size="medium"
                  loading={isSubmitting}
                  type="primary"
                >
                  Restore project
                </Button>
                <Link href={`/project/${ref}/settings/general`}>
                  <a>Delete</a>
                </Link>
              </div>

              <div className="flex gap-4">
                <IconAlertCircle className="text-red-900" size={35} strokeWidth={2} />
                <div>
                  <p className="text-lg">
                    Your account can only have <u>2 free projects.</u>
                  </p>
                  <p className="text-scale-900">
                    To restore this project you'll need to pause or delete an existing free project
                    first.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectPausedState