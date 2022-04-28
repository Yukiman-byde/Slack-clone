<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Room;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RoomRequest;
use App\Comment;
use App\User;
use Auth;

class SlackController extends Controller
{
    public function slack(){
        return view('slack/slack');
    }
    
    
    public function create_channel(RoomRequest $request, Room $room){
       $room->fill($request->input())->save();
       return redirect('/');
    }
    
    
    public function channel(Room $room){
        $rooms = $room->get();
        return $rooms->toJson();
    }
    
    
    public function chat(Request $request, Room $room){
        $result = $room->channel($request['room_hash'], false);
        return $result;
    }
    
    
    public function comment(Request $request, Comment $comment, Room $room){
        $room_name = $request->input()['room_name'];
        $room_id = $room->channel($room_name, true);
        
        $comment->user = Auth::user()->name;
        $comment->content = $request['content'];
        $comment->room_id = $room_id;
        
        $comment->save();
        return 200;
    }
    
    
    public function get_comment(Room $room, $name, Comment $comment){
       $room = $room->channel($name, true); //8
       $comment = $comment->where('room_id', $room)->get();
     // $room = $room->where('room_name', )->get();
       return $comment->toJson();
    }

}
