import './TextField.css'

export function TextField({ name, id, label, placeholder, isRequired = false }) {
    return (<div className="text-field">
        <div className="label">
            {label} {isRequired && "*"}
        </div>
        <input type="text" name={name} id={id} placeholder={placeholder} />
    </div>)
}

export function TextareaField({ name, id, label, placeholder, isRequired = false }) {
    return (<div className="text-field">
        <div className="label">
            {label} {isRequired && "*"}
        </div>
        <textarea name={name} id={id} placeholder={placeholder} cols="30" rows="10"></textarea>
    </div>
    )
}

export function SelectImageField({ name, label, isRequired = false }) {
    return (<div className="text-field">
        <div className="label">
            {label} {isRequired && "*"}
        </div>
        <div className="image">
            Drag and drop or
            click here to select file
        </div>
    </div>
    )
}