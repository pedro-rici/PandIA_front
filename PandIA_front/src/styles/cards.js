const cardView = {
    display: 'flex',
    minWidth: 'sm',
    width: '1202px',
    minHeight: 'lg',
    m: 'auto',
    p: '1rem',
    justifyContent: 'center',
    borderRadius: 2,
    bgcolor: 'grey.400',
    color: 'text.primary',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset',
    marginBottom: '60px'
}

const cardColumns = {
    display: 'flex',
    flexDirection: 'column',
    gap: 2
}

const cardItems = {
    bgcolor: 'grey.200',
    maxWidth: '75%',
    height: '100%',
    p: 2,
    textAlign: 'center',
    borderRadius: 2,
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
}

const cardMap = {
    width: '28.5rem',
    height: '25rem',
    p: 2,
    bgcolor: 'grey.200',
    borderRadius: 2,
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
}

export { cardView, cardColumns, cardItems, cardMap }