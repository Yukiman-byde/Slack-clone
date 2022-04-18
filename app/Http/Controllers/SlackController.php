<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Room;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RoomRequest;

class SlackController extends Controller
{
    public function slack(){
        return view('slack/slack');
    }
    
    public function slack_post(RoomRequest $request, Room $room){
       $room->fill($request->input())->save();
       return redirect('/');
    }
    
    public function channel(Room $room){
        $rooms = $room->get();
        return $rooms->toJson();
    }
    
    public function chat(Request $request, Room $room){
        $result = $room->channel($request['room_hash']);
        return $result;
    }
}
