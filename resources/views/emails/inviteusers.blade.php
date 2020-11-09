<!DOCTYPE html>
<html lang="en">
<body>
    <div>
        <h3> 
            Dear {{ $invitation->email }}
        </h3>
        <div>
           <p>
               {{ $invitation->message }}
           </p>
           <p> 
                Invited by: {{ $user->email }}
            </p>
        </div>
    </div>
</body>
</html>
