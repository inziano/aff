<!DOCTYPE html>
<html lang="en">
<body>
    <div>
        <p> 
           Hello,
        </p>
        <div>
           <p>
                A password reset has been requested for this account  {{ $user->email }}
           </p>
           <p> 
                Use <b>{{ $resetcode }}</b> as your reset code 
            </p>
        </div>
    </div>
</body>
</html>
