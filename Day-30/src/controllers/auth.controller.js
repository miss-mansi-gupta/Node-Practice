// controller has 3 parameters : req, res, next

export async function registerUser(req, res, next) {
    // throw new Error("encounter an error while registering new user")
    // try {
    //     throw new Error("encountered an error while registering new user")
    // } catch (err) {
    //     next(err)
    // }
    // try {
    //     throw new Error("Password is too weak")
    // } catch (err) {
    //     err.status = 400
    //     next(err) // errorhandling middleware ko call kar raha hota hai
    // }
    // try {
    //     throw new Error("User already exists, with same email")
    // } catch (err) {
    //     err.status = 409
    //     next(err)
    // }
    // try {
    //     console.log(user)
    // } catch (err) {
    //     err.status = 500
    //     next(err)
    // }
    res.status(201).json({
        message: "user registered successfully"
    })
}
