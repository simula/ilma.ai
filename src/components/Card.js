import Link from 'next/link'
import Image from 'next/image'
import { FaEnvelope, FaPhoneAlt, FaLandmark } from 'react-icons/fa'

const CardProfilePicture = ({ children }, props) => {
    return (
        <div className="flex h-[300px] max-w-[300px] items-center p-3">
            <Image
                width={192}
                height={192}
                className="w-full rounded-xl"
                src={props.src}
                alt={props.alt}
            />
        </div>
    )
}

const CardName = ({ children }, props) => {
    return (
        <div className="mb-4 h-[75px]">
            <h3 className="text-xl font-bold">{props.name}</h3>
            <h4>{props.position}</h4>
        </div>
    )
}

const CardMailEntry = props => {
    return (
        <div className="my-2 flex w-full items-center">
            <FaEnvelope className="mr-2" />
            <a href={props.href}>Email me</a>
        </div>
    )
}

const CardPhoneEntry = props => {
    return (
        <div className="my-2 flex w-full items-center">
            <FaPhoneAlt className="mr-2" />
            <a href={props.href}>{props.number}</a>
        </div>
    )
}

const CardWebsiteEntry = props => {
    ;<div className="my-2 flex w-full items-center">
        <FaLandmark className="mr-2" />
        <a href={props.href} target="_blank" rel="noreferrer">
            {props.name}
        </a>
    </div>
}

function Card({ children }, props) {
    return (
        <div className="w-[240px] max-w-[240px] p-3 shadow-[0_4px_8px_0px_rgba(0,0,0,0.3)]">
            {children}
        </div>
    )
}

Card.ProfilePicture = CardProfilePicture
Card.Name = CardName
Card.Mail = CardMailEntry
Card.Phone = CardPhoneEntry
Card.Website = CardWebsiteEntry

export default Card
