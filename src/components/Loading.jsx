import React from "react"
import ContentLoader from "react-content-loader"

export const Loading = () => (
    <ContentLoader 
    className = 'pizza-block'
    speed={0}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="2" y="251" rx="10" ry="10" width="280" height="26" /> 
    <circle cx="136" cy="122" r="120" /> 
    <rect x="-2" y="296" rx="6" ry="6" width="280" height="88" /> 
    <rect x="0" y="404" rx="10" ry="10" width="95" height="30" /> 
    <rect x="128" y="397" rx="10" ry="10" width="152" height="40" />
  </ContentLoader>
)
