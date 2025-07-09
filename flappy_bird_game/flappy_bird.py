import pygame
import random
import sys
import math
import json
import os

pygame.init()

SCREEN_WIDTH = 400
SCREEN_HEIGHT = 600
FPS = 60

WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
GREEN = (34, 139, 34)
DARK_GREEN = (0, 100, 0)
LIGHT_GREEN = (144, 238, 144)
BLUE = (135, 206, 235)
LIGHT_BLUE = (173, 216, 230)
YELLOW = (255, 255, 0)
ORANGE = (255, 165, 0)
DARK_YELLOW = (218, 165, 32)
GRAY = (128, 128, 128)
DARK_GRAY = (64, 64, 64)
PURPLE = (128, 0, 128)
RED = (255, 0, 0)

class Bird:
    def __init__(self):
        self.x = 50
        self.y = SCREEN_HEIGHT // 2
        self.width = 28
        self.height = 20
        self.velocity = 0
        self.gravity = 0.5
        self.jump_strength = -10
        self.wing_frame = 0
        self.rotation = 0
        
    def jump(self):
        self.velocity = self.jump_strength
        
    def update(self):
        self.velocity += self.gravity
        self.y += self.velocity
        self.wing_frame += 1
        
        # Rotate bird based on velocity
        self.rotation = min(90, max(-30, self.velocity * 3))
        
    def draw(self, screen):
        # Bird body (oval)
        body_rect = pygame.Rect(self.x, self.y + 2, self.width - 4, self.height - 4)
        pygame.draw.ellipse(screen, YELLOW, body_rect)
        pygame.draw.ellipse(screen, ORANGE, body_rect, 2)
        
        # Wing animation
        wing_offset = 2 if (self.wing_frame // 10) % 2 == 0 else -2
        wing_rect = pygame.Rect(self.x + 8, self.y + 6 + wing_offset, 12, 8)
        pygame.draw.ellipse(screen, DARK_YELLOW, wing_rect)
        
        # Eye
        eye_x = self.x + self.width - 12
        eye_y = self.y + 4
        pygame.draw.circle(screen, WHITE, (eye_x, eye_y), 4)
        pygame.draw.circle(screen, BLACK, (eye_x + 1, eye_y), 2)
        
        # Beak
        beak_points = [
            (self.x + self.width, self.y + 8),
            (self.x + self.width + 6, self.y + 10),
            (self.x + self.width, self.y + 12)
        ]
        pygame.draw.polygon(screen, ORANGE, beak_points)
        
    def get_rect(self):
        return pygame.Rect(self.x, self.y, self.width, self.height)

class Pipe:
    default_gap = 150  # Class variable for dynamic difficulty
    
    def __init__(self, x, speed=3, gap=None):
        self.x = x
        self.width = 60
        self.gap = gap if gap is not None else Pipe.default_gap
        self.height = random.randint(50, SCREEN_HEIGHT - self.gap - 50)
        self.speed = speed
        self.passed = False
        self.cap_height = 30
        
    def update(self):
        self.x -= self.speed
        
    def draw(self, screen, colors=None):
        if colors is None:
            colors = {
                'pipe_color': GREEN,
                'pipe_dark': DARK_GREEN,
                'pipe_light': LIGHT_GREEN
            }
        
        # Top pipe
        self.draw_pipe_segment(screen, self.x, 0, self.width, self.height, True, colors)
        
        # Bottom pipe
        bottom_y = self.height + self.gap
        bottom_height = SCREEN_HEIGHT - bottom_y
        self.draw_pipe_segment(screen, self.x, bottom_y, self.width, bottom_height, False, colors)
        
    def draw_pipe_segment(self, screen, x, y, width, height, is_top, colors):
        # Main pipe body
        pipe_body = pygame.Rect(x + 5, y, width - 10, height)
        pygame.draw.rect(screen, colors['pipe_color'], pipe_body)
        
        # Pipe body highlights and shadows
        highlight_rect = pygame.Rect(x + 7, y, 8, height)
        pygame.draw.rect(screen, colors['pipe_light'], highlight_rect)
        shadow_rect = pygame.Rect(x + width - 12, y, 4, height)
        pygame.draw.rect(screen, colors['pipe_dark'], shadow_rect)
        
        # Pipe cap
        if is_top:
            cap_y = y + height - self.cap_height
            cap_rect = pygame.Rect(x, cap_y, width, self.cap_height)
            pygame.draw.rect(screen, colors['pipe_color'], cap_rect)
            pygame.draw.rect(screen, colors['pipe_dark'], cap_rect, 3)
            
            # Cap highlights
            cap_highlight = pygame.Rect(x + 3, cap_y + 3, width - 6, 6)
            pygame.draw.rect(screen, colors['pipe_light'], cap_highlight)
            
            # Cap shadow
            cap_shadow = pygame.Rect(x + 3, cap_y + height - 9, width - 6, 6)
            pygame.draw.rect(screen, colors['pipe_dark'], cap_shadow)
        else:
            cap_rect = pygame.Rect(x, y, width, self.cap_height)
            pygame.draw.rect(screen, colors['pipe_color'], cap_rect)
            pygame.draw.rect(screen, colors['pipe_dark'], cap_rect, 3)
            
            # Cap highlights
            cap_highlight = pygame.Rect(x + 3, y + 3, width - 6, 6)
            pygame.draw.rect(screen, colors['pipe_light'], cap_highlight)
            
            # Cap shadow
            cap_shadow = pygame.Rect(x + 3, y + self.cap_height - 9, width - 6, 6)
            pygame.draw.rect(screen, colors['pipe_dark'], cap_shadow)
        
    def collides_with(self, bird):
        bird_rect = bird.get_rect()
        top_pipe = pygame.Rect(self.x, 0, self.width, self.height)
        bottom_pipe = pygame.Rect(self.x, self.height + self.gap, self.width, SCREEN_HEIGHT - self.height - self.gap)
        return bird_rect.colliderect(top_pipe) or bird_rect.colliderect(bottom_pipe)
        
    def is_off_screen(self):
        return self.x + self.width < 0

class Game:
    def __init__(self):
        self.screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
        pygame.display.set_caption("Flappy Bird")
        self.clock = pygame.time.Clock()
        self.font = pygame.font.Font(None, 36)
        self.small_font = pygame.font.Font(None, 24)
        self.tiny_font = pygame.font.Font(None, 18)
        self.clouds = []
        self.cloud_timer = 0
        self.high_score = self.load_high_score()
        self.level = 1
        self.scores_for_next_level = 5  # Points needed for next level
        self.level_transition_timer = 0
        self.show_level_up = False
        self.init_clouds()
        self.reset_game()
        
    def load_high_score(self):
        """Load high score from file"""
        try:
            if os.path.exists('high_score.json'):
                with open('high_score.json', 'r') as f:
                    data = json.load(f)
                    return data.get('high_score', 0)
        except:
            pass
        return 0
    
    def save_high_score(self):
        """Save high score to file"""
        try:
            data = {'high_score': self.high_score}
            with open('high_score.json', 'w') as f:
                json.dump(data, f)
        except:
            pass
    
    def check_level_up(self):
        """Check if player should level up"""
        if self.score >= self.scores_for_next_level:
            self.level += 1
            self.scores_for_next_level = self.level * 5  # Exponential score requirement
            self.show_level_up = True
            self.level_transition_timer = 0
            self.update_difficulty()
    
    def update_difficulty(self):
        """Update game difficulty based on current level"""
        # Increase pipe speed slightly each level
        base_speed = 3
        speed_increase = (self.level - 1) * 0.5
        new_speed = min(base_speed + speed_increase, 8)  # Cap at 8
        
        # Update all existing pipes
        for pipe in self.pipes:
            pipe.speed = new_speed
        
        # Decrease gap size slightly each level
        base_gap = 150
        gap_decrease = (self.level - 1) * 5
        new_gap = max(base_gap - gap_decrease, 100)  # Minimum gap of 100
        
        # Apply new gap to future pipes (current pipes keep their gap)
        Pipe.default_gap = new_gap
        
        # Increase pipe spawn rate slightly
        base_spawn_rate = 90
        spawn_rate_decrease = (self.level - 1) * 5
        self.pipe_spawn_rate = max(base_spawn_rate - spawn_rate_decrease, 60)  # Minimum 60 frames
    
    def get_level_theme_colors(self):
        """Get colors based on current level"""
        if self.level <= 3:
            return {
                'sky_top': BLUE,
                'sky_bottom': LIGHT_BLUE,
                'pipe_color': GREEN,
                'pipe_dark': DARK_GREEN,
                'pipe_light': LIGHT_GREEN
            }
        elif self.level <= 6:
            return {
                'sky_top': (120, 120, 180),  # Darker blue
                'sky_bottom': (150, 150, 200),
                'pipe_color': (100, 50, 0),  # Brown pipes
                'pipe_dark': (60, 30, 0),
                'pipe_light': (140, 70, 0)
            }
        else:
            return {
                'sky_top': (80, 0, 80),  # Purple sky
                'sky_bottom': (120, 40, 120),
                'pipe_color': (80, 80, 80),  # Gray pipes
                'pipe_dark': (40, 40, 40),
                'pipe_light': (120, 120, 120)
            }
        
    def init_clouds(self):
        for _ in range(5):
            self.clouds.append({
                'x': random.randint(0, SCREEN_WIDTH),
                'y': random.randint(50, 200),
                'speed': random.uniform(0.2, 0.5)
            })
        
    def reset_game(self):
        self.bird = Bird()
        self.pipes = []
        self.score = 0
        self.game_over = False
        self.pipe_timer = 0
        self.level = 1
        self.scores_for_next_level = 5
        self.level_transition_timer = 0
        self.show_level_up = False
        self.pipe_spawn_rate = 90
        
    def handle_events(self):
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                return False
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_SPACE:
                    if self.game_over:
                        self.reset_game()
                    else:
                        self.bird.jump()
        return True
        
    def update(self):
        # Update clouds
        for cloud in self.clouds:
            cloud['x'] -= cloud['speed']
            if cloud['x'] < -60:
                cloud['x'] = SCREEN_WIDTH + 20
                cloud['y'] = random.randint(50, 200)
                
        if not self.game_over:
            self.bird.update()
            
            if self.bird.y < 0 or self.bird.y + self.bird.height > SCREEN_HEIGHT:
                self.game_over = True
                
            self.pipe_timer += 1
            if self.pipe_timer > self.pipe_spawn_rate:
                # Create pipe with current level difficulty
                pipe_speed = int(min(3 + (self.level - 1) * 0.5, 8))
                pipe_gap = int(max(150 - (self.level - 1) * 5, 100))
                self.pipes.append(Pipe(SCREEN_WIDTH, pipe_speed, pipe_gap))
                self.pipe_timer = 0
                
            for pipe in self.pipes[:]:
                pipe.update()
                if pipe.collides_with(self.bird):
                    self.game_over = True
                if not pipe.passed and pipe.x + pipe.width < self.bird.x:
                    pipe.passed = True
                    self.score += 1
                    self.check_level_up()
                if pipe.is_off_screen():
                    self.pipes.remove(pipe)
            
            # Update level transition
            if self.show_level_up:
                self.level_transition_timer += 1
                if self.level_transition_timer > 120:  # Show for 2 seconds
                    self.show_level_up = False
                    self.level_transition_timer = 0
                    
    def draw_cloud(self, screen, x, y):
        # Cloud made of overlapping circles
        pygame.draw.circle(screen, WHITE, (x, y), 12)
        pygame.draw.circle(screen, WHITE, (x + 15, y), 16)
        pygame.draw.circle(screen, WHITE, (x + 30, y), 12)
        pygame.draw.circle(screen, WHITE, (x + 45, y), 10)
        pygame.draw.circle(screen, WHITE, (x + 10, y - 8), 10)
        pygame.draw.circle(screen, WHITE, (x + 25, y - 8), 14)
        pygame.draw.circle(screen, WHITE, (x + 35, y - 8), 8)
        
    def draw_background(self):
        # Get level theme colors
        colors = self.get_level_theme_colors()
        sky_top = colors['sky_top']
        sky_bottom = colors['sky_bottom']
        
        # Sky gradient
        for y in range(SCREEN_HEIGHT):
            color_ratio = y / SCREEN_HEIGHT
            r = int(sky_top[0] + (sky_bottom[0] - sky_top[0]) * color_ratio)
            g = int(sky_top[1] + (sky_bottom[1] - sky_top[1]) * color_ratio)
            b = int(sky_top[2] + (sky_bottom[2] - sky_top[2]) * color_ratio)
            pygame.draw.line(self.screen, (r, g, b), (0, y), (SCREEN_WIDTH, y))
            
        # Draw clouds
        for cloud in self.clouds:
            self.draw_cloud(self.screen, int(cloud['x']), int(cloud['y']))
            
    def draw(self):
        self.draw_background()
        
        if not self.game_over:
            self.bird.draw(self.screen)
            
        # Get level theme colors for pipes
        colors = self.get_level_theme_colors()
        
        for pipe in self.pipes:
            pipe.draw(self.screen, colors)
            
        # Score with shadow effect
        score_text = self.font.render(f"Score: {self.score}", True, BLACK)
        self.screen.blit(score_text, (12, 12))
        score_text = self.font.render(f"Score: {self.score}", True, WHITE)
        self.screen.blit(score_text, (10, 10))
        
        # Level and high score display
        level_text = self.small_font.render(f"Level: {self.level}", True, BLACK)
        self.screen.blit(level_text, (12, 42))
        level_text = self.small_font.render(f"Level: {self.level}", True, WHITE)
        self.screen.blit(level_text, (10, 40))
        
        high_score_text = self.small_font.render(f"High Score: {self.high_score}", True, BLACK)
        self.screen.blit(high_score_text, (SCREEN_WIDTH - 152, 12))
        high_score_text = self.small_font.render(f"High Score: {self.high_score}", True, WHITE)
        self.screen.blit(high_score_text, (SCREEN_WIDTH - 150, 10))
        
        # Level up notification
        if self.show_level_up:
            level_up_text = self.font.render(f"LEVEL {self.level}!", True, YELLOW)
            level_up_shadow = self.font.render(f"LEVEL {self.level}!", True, BLACK)
            self.screen.blit(level_up_shadow, (SCREEN_WIDTH//2 - 72, SCREEN_HEIGHT//2 - 102))
            self.screen.blit(level_up_text, (SCREEN_WIDTH//2 - 70, SCREEN_HEIGHT//2 - 100))
        
        if self.game_over:
            # Update high score
            if self.score > self.high_score:
                self.high_score = self.score
                self.save_high_score()
            
            # Game over panel
            panel_rect = pygame.Rect(SCREEN_WIDTH//2 - 120, SCREEN_HEIGHT//2 - 100, 240, 160)
            pygame.draw.rect(self.screen, BLACK, panel_rect)
            pygame.draw.rect(self.screen, WHITE, panel_rect, 3)
            
            game_over_text = self.font.render("Game Over!", True, WHITE)
            restart_text = self.small_font.render("Press SPACE to restart", True, WHITE)
            final_score_text = self.small_font.render(f"Final Score: {self.score}", True, WHITE)
            level_reached_text = self.small_font.render(f"Level Reached: {self.level}", True, WHITE)
            high_score_text = self.small_font.render(f"High Score: {self.high_score}", True, YELLOW)
            
            self.screen.blit(game_over_text, (SCREEN_WIDTH//2 - 70, SCREEN_HEIGHT//2 - 80))
            self.screen.blit(final_score_text, (SCREEN_WIDTH//2 - 65, SCREEN_HEIGHT//2 - 50))
            self.screen.blit(level_reached_text, (SCREEN_WIDTH//2 - 70, SCREEN_HEIGHT//2 - 25))
            self.screen.blit(high_score_text, (SCREEN_WIDTH//2 - 60, SCREEN_HEIGHT//2))
            self.screen.blit(restart_text, (SCREEN_WIDTH//2 - 85, SCREEN_HEIGHT//2 + 30))
            
        pygame.display.flip()
        
    def run(self):
        running = True
        while running:
            running = self.handle_events()
            self.update()
            self.draw()
            self.clock.tick(FPS)
        pygame.quit()
        sys.exit()

if __name__ == "__main__":
    game = Game()
    game.run()