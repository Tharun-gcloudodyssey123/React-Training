export function B(props) {
    return (
        <>
            <h1>This is from component B</h1>
            <div>
                <h>Employee Data:</h>
                {props.employeeData.map((employee, index) => {
                    return (
                        <div key={index}>
                            <pre>
                                {JSON.stringify(employee)}
                            </pre>
                        </div>
                    )
                })}
            </div>
        </>
    )
}