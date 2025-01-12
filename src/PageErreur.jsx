import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function PageErreur() {
    const erreur = useRouteError();
  return (
    <div>
        <h2>
            Il y'a une erreur.
        </h2>
        <p>
            <i>
                {erreur.statusText || erreur.message}
            </i>
        </p>
    </div>
  )
}
