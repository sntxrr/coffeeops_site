import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      meetingsToml {
        meetings {
          details
          location
          links {
            text
            uri
          }
        }
      }
    }
  `)

  let rows = data.meetingsToml.meetings.map(_ => {
      let links = _.links.map(__ => {
                 if (__.uri === undefined) {
                   return <li key={__.text}>{__.text}</li>
                 } else {
                   return <li key={(__.text + __.url)}><a href={__.uri}>{__.text}</a></li>
                 }
             })
      return <tr key={(_.location + links)}>
        <td>{_.location}</td>
        <td>{_.details}</td>
        <td className="local_meetups_coord_names"><ul>{links}</ul></td>
      </tr>
  })

  return <>
    <table className="local_meetups_table">
      <thead>
        <tr>
          <th scope="col">Location</th>
          <th scope="col">Details</th>
          <th scope="col">Coordinators/Links</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  </>
}
