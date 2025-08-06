'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from './button'
import { Menu } from 'lucide-react'
import { LINKS } from '@/config'

const MobileNav = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button
        onClick={() => setOpen(true)}
        variant={'ghost'}
        size="icon"
        className="md:hidden"
      >
        <Menu className="h-5 w-5" />
      </Button>
      <Dialog open={open} onClose={setOpen} className="relative z-10 md:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-primary/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-[80vw] pl-10 sm:pl-16">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
              >
                <TransitionChild>
                  <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="relative rounded-md text-primary hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
                    >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon aria-hidden="true" className="size-6" />
                    </button>
                  </div>
                </TransitionChild>
                <div className="flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <DialogTitle className="text-base font-semibold text-primary">Navigation</DialogTitle>
                  </div>
                  <div className="relative mt-6 flex-1 sm:px-6">
                    <nav className="space-y-2">
                      {LINKS.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="block px-4 py-3 text-base font-medium text-primary hover:text-primary hover:bg-primary transition-colors border-b"
                        >
                          {item.label}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default MobileNav