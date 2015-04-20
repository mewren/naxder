//
//  GameScene.swift
//  Swiftris
//
//  Created by Jennifer Nolan on 2015-04-18.
//  Copyright (c) 2015 __MyCompanyName__. All rights reserved.
//https://www.bloc.io/tutorials/swiftris-build-your-first-ios-game-with-swift#!/chapters/682

import SpriteKit


let TickLengthLevelOne = NSTimeInterval(600)

class GameScene: SKScene {
    
    var tick:(() -> ())?
    var tickLengthMillis = TickLengthLevelOne
    var lastTick:NSDate?
    
    required init(coder aDecorder: NSCoder) {
        fatalError("NSCoder not supported")
    }
    
    override init(size: CGSize) {
        super.init(size: size)
        
        anchorPoint = CGPoint(x:0, y: 1.0)
        
        let background = SKSpriteNode(imageNamed: "background")
        background.position = CGPoint(x:0,y:0)
        background.anchorPoint = CGPoint(x:0, y: 1.0)
        addChild(background)
    }

   
    override func update(currentTime: CFTimeInterval) {
        /* Called before each frame is rendered */
        
        if lastTick == nil {
            return
        }
        var timePassed = lastTick!.timeIntervalSinceNow * -1000.0
        if timePassed > tickLengthMillis {
            lastTick = NSDate()
            tick?()
        }
        
    }
    
    func startTicking() {
        lastTick = NSDate()
    }
    
    func stopTicking() {
        lastTick = nil
    }
    
}
