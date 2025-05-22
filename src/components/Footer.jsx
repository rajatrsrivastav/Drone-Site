import React from 'react'

export const Footer = () => {
  return (
      <div className="sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              Contact:{" "}
              <a href="mailto:careers@dronaaviation.com" className="text-primary hover:underline">
                careers@dronaaviation.com
              </a>
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © {new Date().getFullYear()} Drona Aviation Pvt. Ltd. All rights reserved.
            </p>
          </div>
      </div>
  )
}
