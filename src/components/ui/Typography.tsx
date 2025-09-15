

type typographyProp = {
    className: string;
    label: string
}

export const Typography = ({className, label}: typographyProp) => {
  return (
    <div>
        <span className={className}>{label}</span>
    </div>
  )
}

