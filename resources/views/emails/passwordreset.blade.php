<!DOCTYPE html>
<html lang="en">
<body>
    <div>
        <h3> 
            Dear {{ $user->username }}
        </h3>
        <div>
           <p>
                A password reset has been requested for this account
           </p>
           <p> 
                Use <b>{{ $resetcode }}</b> as your reset code 
            </p>
        </div>
    </div>
</body>
</html>
