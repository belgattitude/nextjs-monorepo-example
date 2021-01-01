import React from 'react'

/**
 * Set your global app-providers (i.e: redux, react-query,...) here
 */
export const AppProviders: React.FC = (props) => {
  return <>{props.children}</>
}
