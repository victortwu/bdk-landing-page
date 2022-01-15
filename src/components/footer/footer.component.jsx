import data from '../../data/restaurant-info.data' 

import './footer.styles.scss'

const Footer = () => (
    <div className="footer">
        <span>{data.name}</span>
        <span>{data.address}</span>
        <span>{data.phone}</span>
    </div>
)

export default Footer