import './FormContainer.scss'

export default function FormContainer({ label, children }) {
    return (
        <div className="form">
            <div className="header">
                <h3 style={{ padding: "0px" }}>
                    {label}
                </h3>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export function FormFooter({formName}) {
    return (
        <div className="form-footer">
            <button className="save">Save as Draft</button>
            <button className="submit" type="submit" form={formName} value="Submit">Submit</button>
        </div>)
}